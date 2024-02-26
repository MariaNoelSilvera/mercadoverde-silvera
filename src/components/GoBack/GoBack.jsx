import { useNavigate } from "react-router-dom";
import back from '../../assets/back.png';
import styles from './GoBack.module.scss';

const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className={styles.goBackIcon} onClick={goBack}>
      <img src={back} alt="Go Back" />
    </div>
  );
};

export default GoBack;
