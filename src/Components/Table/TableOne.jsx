import Style from "./table.module.css";

export default function TableOne({
  heading,
  headerData,
  bodyData,
  box,
  data1,
  data2,
  data3,
  data4,
  img,
  imageMain,
}) {
  return (
    <div className={Style.tableBox}>
      <h4 className={Style.tableLabel}>{heading}</h4>
      <div className={Style.tableWrapper}>
        <table className={Style.table}>
          <thead>
            <tr className={Style.tableHead}>
              {headerData?.map((list, i) => {
                return <th key={list || i}>{list}</th>;
              })}
            </tr>
          </thead>

          <tbody className={Style.tableBody}>
            {bodyData?.map((item, index) => {
              return (
                <tr key={item.name || index}>
                  {data1 && (
                    <td>
                      {box ? (
                        <input type="checkbox" className={Style.checkBox} />
                      ) : null}
                      {img ? (
                        <img
                          src={item[imageMain]}
                          className={Style.tableImage}
                        />
                      ) : null}
                      {item[data1]}
                    </td>
                  )}
                  {data2 && <td>{item[data2]}</td>}
                  {data3 && <td>{item[data3]}</td>}
                  {data4 && <td>{item[data4]}</td>}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
