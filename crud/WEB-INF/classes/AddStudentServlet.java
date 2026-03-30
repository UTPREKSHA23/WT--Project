import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddStudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String name = request.getParameter("name");
        String ageStr = request.getParameter("age");

        try {
            int age = Integer.parseInt(ageStr);

            Class.forName("org.apache.derby.jdbc.EmbeddedDriver");

            Connection con = DriverManager.getConnection(
                "jdbc:derby:testdb;create=true"
            );

            PreparedStatement ps = con.prepareStatement(
                "insert into students (name, age) values (?, ?)"
            );

            ps.setString(1, name);
            ps.setInt(2, age);

            ps.executeUpdate();

            out.println("Data Inserted Successfully!");

            con.close();

        } catch(Exception e) {
            out.println("Error: " + e.getMessage());
        }
    }
}
