import AdminDrawerList from "../../admincomponent/AdminDrawerList";
import AdminRoutes from "../../../routes/AdminRoutes";

const AdminDashboard = () => {
    const toggleDrawer = () => {}
  return (
    <div>
      <div>
        <div className="lg:flex lg:h-[90vh]">
          <section className="hidden lg:block h-full">
            <AdminDrawerList toggleDrawer={toggleDrawer} />
          </section>
          <section className="p-10 w-full lg:w-[80%] overflow-y-auto">
            {/* Admin Routes */}
            <AdminRoutes />
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
