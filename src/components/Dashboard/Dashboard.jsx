import Navbar from "../Navbar/Navbar";
import PropTypes from 'prop-types';

const Dashboard = ({ children }) => {
    return (
        <div>
            <Navbar />
            <div>{children} </div>
        </div>
    );
};

Dashboard.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Dashboard;