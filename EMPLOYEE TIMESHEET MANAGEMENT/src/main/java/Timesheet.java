import java.sql.*;
import java.util.Scanner;


interface EmployeeManagement {
    void enterWorkHours(Connection conn, int empId, Scanner scanner) throws SQLException;
    void requestLeave(Connection conn, int empId, Scanner scanner);
    void viewSalary(Connection conn, int empId);
    void updateSheet();
    void viewLeaveRequests(Connection conn, int empId);
}


abstract class Employee {
    protected static final String db_url = "jdbc:mysql://localhost:3306/timesheet";
    protected static final String db_username = "root";
    protected static final String db_password = "harini301103";

   
    abstract int getEmployeeId();
}


public class Timesheet extends Employee implements EmployeeManagement {
    private int empId;

 
    public Timesheet(int empId) {
        this.empId = empId;
    }

   
    @Override
    int getEmployeeId() {
        return empId;
    }

    
    @Override
    public void enterWorkHours(Connection conn, int empId, Scanner scanner) throws SQLException {
       
        System.out.print("Enter the work date (YYYY-MM-DD): ");
        String workDateStr = scanner.nextLine();
        System.out.print("Enter total hours worked: ");
        double hoursWorked = scanner.nextDouble();

        String insertTimesheetSQL = "INSERT INTO timesheets (emp_id, work_date, hours_worked) VALUES (?, ?, ?)";
        try (PreparedStatement pstmt = conn.prepareStatement(insertTimesheetSQL)) {
            pstmt.setInt(1, empId);
            pstmt.setString(2, workDateStr);
            pstmt.setDouble(3, hoursWorked);
            pstmt.executeUpdate();
            System.out.println("Work hours entered successfully!");
        }
    }

    @Override
    public void requestLeave(Connection conn, int empId, Scanner scanner) {
      
        System.out.print("Enter the leave start date (YYYY-MM-DD): ");
        String startDateStr = scanner.nextLine();
        System.out.print("Enter the leave end date (YYYY-MM-DD): ");
        String endDateStr = scanner.nextLine();
        System.out.print("Enter the reason for leave: ");
        String reason = scanner.nextLine();

        String insertLeaveRequestSQL = "INSERT INTO leave_requests (emp_id, start_date, end_date, reason, status) VALUES (?, ?, ?, ?, 'Pending')";
        try (PreparedStatement pstmt = conn.prepareStatement(insertLeaveRequestSQL)) {
            pstmt.setInt(1, empId);
            pstmt.setString(2, startDateStr);
            pstmt.setString(3, endDateStr);
            pstmt.setString(4, reason);
            pstmt.executeUpdate();
            System.out.println("Leave request submitted successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    @Override
    public void viewSalary(Connection conn, int empId) {
 
        String selectSalarySQL = "SELECT salary_amount FROM salary WHERE emp_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(selectSalarySQL)) {
            pstmt.setInt(1, empId);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                double salaryAmount = rs.getDouble("salary_amount");
                System.out.println("Your salary: $" + salaryAmount);
            } else {
                System.out.println("Salary not available for the given Employee ID.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    @Override
    public void viewLeaveRequests(Connection conn, int empId) {
        String selectLeaveRequestsSQL = "SELECT start_date, end_date, reason, status FROM leave_requests WHERE emp_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(selectLeaveRequestsSQL)) {
            pstmt.setInt(1, empId);
            ResultSet rs = pstmt.executeQuery();

            System.out.println("Leave Requests for Employee ID: " + empId);
            System.out.println("----------------------------------");
            System.out.println("Start Date\tEnd Date\tReason\t\tStatus");
            System.out.println("----------------------------------");

            while (rs.next()) {
                String startDate = rs.getString("start_date");
                String endDate = rs.getString("end_date");
                String reason = rs.getString("reason");
                String status = rs.getString("status");
                System.out.println(startDate + "\t" + endDate + "\t" + reason + "\t" + status);
            }

            System.out.println("----------------------------------");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    
    public void updateSheet() {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Enter your id:");
        int empId = scanner.nextInt();

        Timesheet timesheet = new Timesheet(empId);
        try (Connection conn = DriverManager.getConnection(db_url, db_username, db_password)) {
            while (true) {
                System.out.println("1. Your total working hours");
                System.out.println("2. Request Leave");
                System.out.println("3. View your salary");
                System.out.println("4. View Leave Request");
                System.out.println("5. Exit");
                System.out.print("Your choice: ");
                int choice = scanner.nextInt();
                scanner.nextLine(); // Clear the buffer

                switch (choice) {
                    case 1:
                        timesheet.enterWorkHours(conn, empId, scanner);
                        break;
                    case 2:
                        timesheet.requestLeave(conn, empId, scanner);
                        break;
                    case 3:
                        timesheet.viewSalary(conn, empId);
                        break;
                    case 4:
                    	timesheet.viewLeaveRequests(conn,empId);
                    	break;
                    case 5:
                        System.out.println("Have a great day :)");
                        return;
                    default:
                        System.out.println("Please give another choice. It's invalid.");
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
    
}
