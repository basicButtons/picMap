import { Entrys } from "./Entry";
import { MainMap } from "./Map";
import styles from "./styles.module.less";
export const MainPage = () => {
  //   const _AMapSecurityConfig = {
  //     securityJsCode: "ee45cab605842a552f993f3c9bdae2c1",
  //   };
  return (
    <div className={styles.MainMapWrapper}>
      <MainMap />
      <Entrys />
    </div>
  );
};
