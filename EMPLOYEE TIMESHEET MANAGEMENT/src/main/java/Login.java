import java.util.*;
import java.sql.*;


enum UserPosition {
    MANAGER,
    EMPLOYEE
}

public class Login {
    private static final String db_url = "jdbc:mysql://localhost:3306/timesheet";
    private static final String db_username = "root";
    private static final String db_password = "harini301103";

    public static void main(String[] args) {
        Scanner ob = new Scanner(System.in);
        System.out.println("WELCOME TO EMPLOYEE TIMESHEET MANAGEMENT SYSTEM!!!");
        System.out.println("Select your position:");
        System.out.println("1.Manager");
        System.out.println("2.Employee");
        System.out.println("Enter your choice");
        int choose = ob.nextInt();
        ob.nextLine();

        
        UserPosition userPosition = getUserPosition(choose);

        switch (userPosition) {
            case MANAGER:
                managerLogin(ob);
                break;
            case EMPLOYEE:
                employeeLogin(ob);
                break;
            default:
                System.out.println("Give another choice!! It's invalid");
        }
    }

    private static UserPosition getUserPosition(int choice) {
        switch (choice) {
            case 1:
                return UserPosition.MANAGER;
            case 2:
                return UserPosition.EMPLOYEE;
            default:
                return null; 
        }
    }

    private static void employeeLogin(Scanner ob) {
        EmployeeManagement timesheet = new Timesheet(0);
        System.out.println("Employee Login");
        System.out.println("Your id:");
        int id = ob.nextInt();
        ob.nextLine();
        System.out.println("Your password:");
        String password = ob.nextLine();
        if (EmployeecheckCredentials(id, password)) {
            System.out.println("Logged in! Welcome");
            timesheet.updateSheet();
        } else {
            System.out.println("Invalid username or password");
        }
    }

    private static void managerLogin(Scanner ob) {
        Review review = new Review();
        System.out.println("Manager Login");
        System.out.println("Your id:");
        int id = ob.nextInt();
        ob.nextLine();
        System.out.println("Your password:");
        String password = ob.nextLine();
        if (ManagercheckCredentials(id, password)) {
            System.out.println("Logged in! Welcome");
            review.manager();
        } else {
            System.out.println("Invalid username or password");
        }
    }

    private static boolean EmployeecheckCredentials(int id, String password) {
        try (Connection connection = DriverManager.getConnection(db_url, db_username, db_password)) {
            String query = "SELECT * FROM employeelogin where id=? and password=? ";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, id);
            preparedStatement.setString(2, password);

            ResultSet resultSet = preparedStatement.executeQuery();
            return resultSet.next();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }

    private static boolean ManagercheckCredentials(int id, String password) {
        try (Connection connection = DriverManager.getConnection(db_url, db_username, db_password)) {
            String query = "SELECT * FROM managerlogin where id=? and password=?";
            PreparedStatement preparedStatement = connection.prepareStatement(query);
            preparedStatement.setInt(1, id);
            preparedStatement.setString(2, password);

            ResultSet resultSet = preparedStatement.executeQuery();
            return resultSet.next();
        } catch (SQLException e) {
            e.printStackTrace();
        }
        return false;
    }
}
