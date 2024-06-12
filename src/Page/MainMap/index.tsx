import styles from "./styles.module.less";
export const MainMap = () => {
  const _AMapSecurityConfig = {
    securityJsCode: "ee45cab605842a552f993f3c9bdae2c1",
  };
  return (
    <div className={styles.MainMapWrapper}>
      <div id="container"></div>
    </div>
  );
};
