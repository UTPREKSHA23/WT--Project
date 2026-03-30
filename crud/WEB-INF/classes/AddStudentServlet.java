import java.io.*;
import javax.servlet.*;
import javax.servlet.http.*;
import java.sql.*;

public class AddStudentServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        PrintWriter out = response.getWriter();

        String action = request.getParameter("action");
        String idStr = request.getParameter("id");
        String name = request.getParameter("name");
        String ageStr = request.getParameter("age");

        try {
            Class.forName("org.apache.derby.jdbc.EmbeddedDriver");

            Connection con = DriverManager.getConnection(
                "jdbc:derby:/home/pragati/Downloads/apache-tomcat-9.0.116/bin/testdb;create=true"
            );

            Statement stmt = con.createStatement();

            // CREATE
            if(action.equals("create")) {
                int id = Integer.parseInt(idStr);
                int age = Integer.parseInt(ageStr);

                stmt.executeUpdate("insert into students values (" + id + ", '" + name + "', " + age + ")");
                out.println("Inserted Successfully!");
            }

            // READ
            else if(action.equals("read")) {
                ResultSet rs = stmt.executeQuery("select * from students");

                while(rs.next()) {
                    out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3) + "<br>");
                }
            }

            // UPDATE
            else if(action.equals("update")) {
                int id = Integer.parseInt(idStr);
                int age = Integer.parseInt(ageStr);

                stmt.executeUpdate("update students set name='" + name + "', age=" + age + " where id=" + id);
                out.println("Updated Successfully!");
            }

            // DELETE
            else if(action.equals("delete")) {
                int id = Integer.parseInt(idStr);

                stmt.executeUpdate("delete from students where id=" + id);
                out.println("Deleted Successfully!");
            }

            // SEARCH
            else if(action.equals("search")) {
                int id = Integer.parseInt(idStr);

                ResultSet rs = stmt.executeQuery("select * from students where id=" + id);

                if(rs.next()) {
                    out.println(rs.getInt(1) + " " + rs.getString(2) + " " + rs.getInt(3));
                } else {
                    out.println("Record Not Found");
                }
            }

            con.close();

        } catch(Exception e) {
            out.println("Error: " + e.getMessage());
        }
    }
}
