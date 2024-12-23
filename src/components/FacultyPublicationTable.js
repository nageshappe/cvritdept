const FacultyPublicationTable = ({ data }) => {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Name of Faculty</th>
            <th>Designation</th>
            <th>Total Publications</th>
            <th>International Journals</th>
            <th>National Journals</th>
            <th>Quality Publications Count</th>
            <th>International Conferences</th>
            <th>National Conferences</th>
            <th>Books/Book Chapters</th>
            <th>Total Citations</th>
          </tr>
        </thead>
        <tbody>
          {data.map((faculty, index) => (
            <tr key={index}>
              <td>{faculty['S.No']}</td>
              <td>{faculty['Name of Faculty']}</td>
              <td>{faculty['Designation']}</td>
              <td>{faculty['Total Publications']}</td>
              <td>{faculty['International Journals']}</td>
              <td>{faculty['National Journals']}</td>
              <td>{faculty['Quality Publications Count (Web of Science, Scopus Only)']}</td>
              <td>{faculty['International Conferences']}</td>
              <td>{faculty['National Conferences']}</td>
              <td>{faculty['Books/Book Chapters']}</td>
              <td>{faculty['Total Citations']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default FacultyPublicationTable;