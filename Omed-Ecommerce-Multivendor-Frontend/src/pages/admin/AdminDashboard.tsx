import AdminDrawerList from "../../components/admin/AdminDrawerList";
import AdminRoutes from "../../routes/AdminRoutes";
import { useAppDispatch } from "../../state/Store";
import { useEffect } from "react";
import { fetchHomeCategories } from "../../state/admin/adminSlice";

const AdminDashboard = () => {
    const toggleDrawer = () => {}
    const dispatch = useAppDispatch();
    useEffect(()=>{
      dispatch(fetchHomeCategories());
    },[])
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
