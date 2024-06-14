import Search from "antd/es/input/Search";
import styles from "../styles.module.less";
export const Entrys = () => {
  const onSearch = () => {};
  return (
    <div className={styles.entryWrapper}>
      <div className={styles.searchWrapper}>
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          className={styles.search}
        />
      </div>
      entrys
    </div>
  );
};
