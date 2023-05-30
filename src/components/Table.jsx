const Table = ({ data }) => {
  return (
    <table className="table table-striped table-hover table-bordered">
      <thead className="table-primary">
        <tr>
          <th className="text-center">No</th>
          <th className="text-center">Title</th>
          <th className="text-center">Category</th>
          <th className="text-center">Star</th>
          <th className="text-center">Rating</th>
          <th className="text-center">Price</th>
          <th className="text-center">Video Count</th>
          <th className="text-center">Urls</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => {
          return (
            <tr key={index}>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{item.title}</td>
              <td className="text-center">{item.category}</td>
              <td className="text-center">{item.star}</td>
              <td className="text-center">{item.rating}</td>
              <td className="text-center">{item.price}</td>
              <td className="text-center">{item.videoCount}</td>
              <td className="text-center">
                {item["urls"].map((url, index) => {
                  return (
                    <>
                      <a target="_blank" href={url} key={index}>
                        Url {index+1}
                      </a>
                      <br />
                    </>
                  );
                })}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
