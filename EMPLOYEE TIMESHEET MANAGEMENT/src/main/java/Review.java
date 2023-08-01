import java.sql.*;
import java.util.Scanner;

public class Review {
    private static final String db_url = "jdbc:mysql://localhost:3306/timesheet";
    private static final String db_username = "root";
    private static final String db_password = "harini301103";

    public void manager() {
        Scanner scanner = new Scanner(System.in);

        try (Connection conn = DriverManager.getConnection(db_url, db_username, db_password)) {

            while (true) {
                System.out.println("1. Review Timesheets");
                System.out.println("2. Approve Timesheets");
                System.out.println("3. Review Leave Requests");
                System.out.println("4. Approve Leave Request");
                System.out.println("5. Deny Leave Request");
                System.out.println("6. Update Salaries");
                System.out.println("7. Add Employee");
                System.out.println("8. Exit");
                System.out.print("Enter your choice: ");
                int choice = scanner.nextInt();
                scanner.nextLine(); 

                switch (choice) {
                    case 1:
                        reviewTimesheets(conn, scanner);
                        break;
                    case 2:
                        approveTimesheets(conn, scanner);
                        break;
                    case 3:
                        reviewLeaveRequests(conn, scanner);
                        break;
                    case 4:
                        approveLeaveRequest(conn, scanner);
                        break;
                    case 5:
                        denyLeaveRequest(conn, scanner);
                        break;
                    case 6:
                        updateSalary(conn, scanner);
                        break;
                    case 7:
                    	System.out.println("Enter the Employee Name:");
                    	String empName=scanner.nextLine();
                    	System.out.println("Enter the Employee Role:");
                    	String empRole=scanner.nextLine();
                    	addEmployee(conn, empName,empRole);
                    	break;
                   
                    case 8:
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

    private static void reviewTimesheets(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Your employee ID: ");
        int empId = scanner.nextInt();

        String selectTimesheetsSQL = "SELECT * FROM timesheets WHERE emp_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(selectTimesheetsSQL)) {
            pstmt.setInt(1, empId);
            ResultSet rs = pstmt.executeQuery();

            while (rs.next()) {
                int timesheetId = rs.getInt("timesheet_id");
                String workDate = rs.getString("work_date");
                double hoursWorked = rs.getDouble("hours_worked");
                boolean approved = rs.getBoolean("approved");

                System.out.println("Timesheet ID: " + timesheetId);
                System.out.println("Work Date: " + workDate);
                System.out.println("Hours Worked: " + hoursWorked);
                System.out.println("Approved: " + (approved ? "Yes" : "No"));
                System.out.println("------------------------------");
            }
        }
    }

    private static void approveTimesheets(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter employee ID: ");
        int empId = scanner.nextInt();

        String updateApprovedSQL = "UPDATE timesheets SET approved = true WHERE emp_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(updateApprovedSQL)) {
            pstmt.setInt(1, empId);
            int rowsUpdated = pstmt.executeUpdate();

            System.out.println(rowsUpdated + " timesheets approved.");
        }
    }

    private static void reviewLeaveRequests(Connection conn, Scanner scanner) throws SQLException {
        String selectLeaveRequestsSQL = "SELECT * FROM leave_requests WHERE status = 'Pending'";
        try (Statement stmt = conn.createStatement()) {
            ResultSet rs = stmt.executeQuery(selectLeaveRequestsSQL);

            while (rs.next()) {
                int leaveRequestId = rs.getInt("leave_request_id");
                int empId = rs.getInt("emp_id");
                String startDate = rs.getString("start_date");
                String endDate = rs.getString("end_date");
                String reason = rs.getString("reason");

                System.out.println("Leave Request ID: " + leaveRequestId);
                System.out.println("Employee ID: " + empId);
                System.out.println("Start Date: " + startDate);
                System.out.println("End Date: " + endDate);
                System.out.println("Reason: " + reason);
                System.out.println("------------------------------");
            }
        }
    }

    private static void approveLeaveRequest(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter Leave Request ID to approve: ");
        int leaveRequestId = scanner.nextInt();
        scanner.nextLine();

        String updateLeaveRequestSQL = "UPDATE leave_requests SET status = 'Approved' WHERE leave_request_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(updateLeaveRequestSQL)) {
            pstmt.setInt(1, leaveRequestId);
            int rowsUpdated = pstmt.executeUpdate();

            if (rowsUpdated > 0) {
                System.out.println("Leave request approved.");
            } else {
                System.out.println("Invalid Leave Request ID.");
            }
        }
    }

    private static void denyLeaveRequest(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter Leave Request ID to deny: ");
        int leaveRequestId = scanner.nextInt();
        scanner.nextLine();

        String updateLeaveRequestSQL = "UPDATE leave_requests SET status = 'Denied' WHERE leave_request_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(updateLeaveRequestSQL)) {
            pstmt.setInt(1, leaveRequestId);
            int rowsUpdated = pstmt.executeUpdate();

            if (rowsUpdated > 0) {
                System.out.println("Leave request denied.");
            } else {
                System.out.println("Invalid Leave Request ID.");
            }
        }
    }

    private static void updateSalary(Connection conn, Scanner scanner) throws SQLException {
        System.out.print("Enter Employee ID to update salary: ");
        int empId = scanner.nextInt();
        scanner.nextLine(); 

        String selectTimesheetsSQL = "SELECT SUM(hours_worked) AS total_hours FROM timesheets WHERE emp_id = ?";
        try (PreparedStatement pstmt = conn.prepareStatement(selectTimesheetsSQL)) {
            pstmt.setInt(1, empId);
            ResultSet rs = pstmt.executeQuery();

            if (rs.next()) {
                double totalHours = rs.getDouble("total_hours");
                double hourlyRate = 15.0;

                double salaryAmount = totalHours * hourlyRate;

                String updateSalarySQL = "INSERT INTO salary (emp_id, salary_amount) VALUES (?, ?) " +
                        "ON DUPLICATE KEY UPDATE salary_amount = ?";
                try (PreparedStatement updatePstmt = conn.prepareStatement(updateSalarySQL)) {
                    updatePstmt.setInt(1, empId);
                    updatePstmt.setDouble(2, salaryAmount);
                    updatePstmt.setDouble(3, salaryAmount);
                    updatePstmt.executeUpdate();

                    System.out.println("Salary updated successfully!");
                }
            } else {
                System.out.println("No timesheets found for the given Employee ID.");
            }
        }
    }

    private static int addEmployee(Connection conn, String empName, String empRole) throws SQLException {
        String insertEmployeeSQL = "INSERT INTO employees (emp_name, emp_role) VALUES (?, ?)";

        try (PreparedStatement pstmt = conn.prepareStatement(insertEmployeeSQL, Statement.RETURN_GENERATED_KEYS)) {
            pstmt.setString(1, empName);
            pstmt.setString(2, empRole);
            pstmt.executeUpdate();

            ResultSet generatedKeys = pstmt.getGeneratedKeys();
            int empId = -1;
            if (generatedKeys.next()) {
                empId = generatedKeys.getInt(1);
                System.out.println("Employee with ID: " + empId + " is added.");
            }

            return empId;
        }
    }
    
}
