export const metadata = {
    title: 'Dashboard | Next Hero',
    description: 'Next Hero',
  }

const DashboardLayout = ({children}) => {
    return (
        <div>
            <div>
                SideBar
            </div>
            {children}
        </div>
    );
};

export default DashboardLayout;