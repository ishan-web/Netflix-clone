import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Movies and Series</h3>
      <table className="widgetLgTable">
        <tbody>
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Movies</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Views</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.indianexpress.com/2021/11/spider-man-no-way-home-new-poster-1200.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Spider Man No Way Home</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">1200</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://images.moviesanywhere.com/828288e8eff24b4e7851f6404ec98b67/ed5440ea-03ce-4038-8538-10845b0c7d82.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Inception</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">1020</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://cdn.vox-cdn.com/thumbor/T-VABqDoNb2d1NgEcKQgvFMvTI0=/0x0:2067x1377/1400x1050/filters:focal(869x524:1199x854):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/54120133/your_name_oped.0.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Your Name</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">990</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://m.media-amazon.com/images/M/MV5BOThjODMyM2QtNTNhYi00ZGM4LWIxZTAtMDAyYWNhYzYxMjJiXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Breaking Bad</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">1500</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
