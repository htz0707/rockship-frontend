import styles from "../../../styles/case-studies-detail.module.scss";

export const HighLightItem = ({ src, name, color }) => {
  return (
    <div className={styles["highlight-item"]}>
      <div
        className={styles["highlight-item-image"]}
        style={{ backgroundColor: color }}
      >
        <img src={src} alt={name} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export const DescriptionItem = ({ title, data = [] }) => {
  return (
    <div className={styles["description"]}>
      <div className={styles["description-item"]}>
        <h3>{title}</h3>
        {data?.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </div>
    </div>
  );
};

export const MenuItem = ({ title, lsValue, content }) => {
  return (
    <div className={styles["menu-item"]}>
      <h3>{title}</h3>
      <div className={styles["divider"]} />
      {content && <p>{content}</p>}
      {lsValue?.length && (
        <ul>
          {lsValue?.map((item, index) => {
            return <li key={index}>{item?.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
};


export const ReviewItem = ({ lsValue }) => {
  return (
    <div className={styles["review"]}>
      <h3>Reviews from our customers</h3>
      {lsValue?.map((item) => {
        return (
          <div className={styles["card-review"]} key={item.id}>
            <div className={styles["card-left"]}>
              <img src={"/ceo.png"} alt="menu" />
              <p>
                <span>{item.title}</span> {item.name}
              </p>
            </div>
            <div className={styles["divider"]} />
            <div className={styles["card-right"]}>
              {item?.data?.map((item1, index) => {
                return <p key={index}>{item1}</p>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};
