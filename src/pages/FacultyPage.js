
import React from 'react';
import facultyData from "./facultyprofiles.json"
function FacultyPage() {
  return (
    <div>
      <h1>Faculty of IT Department</h1>
      <table class="table table-bordered">
        <thead>
            <tr>
                <th>S. No</th>
                <th>Image</th>
                <th>Faculty Name</th>
                <th>Designation</th>
                <th>Qualification</th>
                <th>Profile</th>
            </tr>
        </thead>
        <tbody>
            {facultyData.map((faculty,index)=>(
              <tr key={index}>
                <td>{index+1}</td>
                <td><img src={faculty['img']} width="100px" height="100px"/></td>
                <td>{faculty['Faculty Name']}</td>
                <td>{faculty['Position']}</td>
                <td>{faculty['Qualifications']}</td>
                <td><a href={faculty['Profile Link']} target='_blank'>Profile</a></td>
              </tr>  
            ))}
        </tbody>
        {/* <tbody>
            <tr>
                <td>1</td>
                <td><img src=""/></td>      
                <td>Dr. Bipin Bihari Jaya Singh</td><td>Professor & HoD</td>
                <td>M.Tech., Ph.D.</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>2</td>
                <td><img src=""/></td>      
                <td>Dr. A.Malla Reddy</td><td>Professor</td>
                <td>M.Tech., Ph.D.</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>3</td>
                <td><img src=""/></td>      
                <td>Dr.J. Sengathir </td><td>Professor </td>
                <td>M.Tech., Ph.D.</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>4</td>
                <td><img src=""/></td>      
                <td>Dr. K. Sarangam</td><td>Associate Professor </td>
                <td>M.Tech., Ph.D.</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>5</td>
                 <td><img src=""/></td>                
                <td>Mr.K.Bhramanand </td><td>Associate Professor</td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>6</td>
                <td><img src=""/></td>      
                <td>Mr. C V S SatyaMurty </td><td>Assocaite Professor</td>
                <td>M.Tech., (Ph.D.)</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>7</td>
                <td><img src=""/></td>      
                <td>Mr. A.SeethaRam Nagesh</td><td>Associate Professor </td>
                <td>M.Tech., (Ph.D.)</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>8</td>
                <td><img src=""/></td>      
                <td>Mr. S. Anupkant</td><td>Sr. Assistant Professor </td>
                <td>M.Tech., (Ph.D.)</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>9</td>
                <td><img src=""/></td>      
                <td>Mr.  K Veeranjaneyulu </td><td>Sr. Assitant Professor</td>
                <td>M.Tech., (Ph.D.)</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>10</td>
                <td><img src=""/></td>      
                <td>Mrs. Swathi Agarwal, </td><td>Sr. Assistant Professor</td>
                <td>M.Tech., (Ph.D).</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>11</td>
                <td><img src=""/></td>      
                <td>Mr. B Satheesh Kumar</td><td> Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>12</td>
                <td><img src=""/></td>      
                <td>Mr.B.Kiran Kumar</td><td>Assistant Professor</td>
                <td>M.Tech., </td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>13</td>
                <td><img src=""/></td>      
                <td>Mr. B Satheesh Kumar</td><td>Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr><tr>
                <td>14</td>
                <td><img src=""/></td>      
                <td>Mrs.S.Swetha, </td><td> Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr><tr>
                <td>15</td>
                <td><img src=""/></td>      
                <td>Mrs. Jannam Sadana </td><td> Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>16</td>
                <td><img src=""/></td>      
                <td>Mrs. G. Shailaja </td><td> Assistant Professor </td>
                <td>M.Tech.,(Ph.D)</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>17</td>
                <td><img src=""/></td>      
                <td>Mr. Gundeti Srinivas </td><td>Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>18</td>
                <td><img src=""/></td>      
                <td>Mr.M.Bhagavanthu </td><td> Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>19</td>
                <td><img src=""/></td>      
                <td>Ms. Shaik. Jaheda </td><td>Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
            <tr>
                <td>19</td>
                <td><img src=""/></td>      
                <td>Mr. B. Mallaiah </td><td> Assistant Professor </td>
                <td>M.Tech.,</td>
                <td><a href="#" class="btn btn-primary">View Profile</a></td>
            </tr>
        </tbody> */}
    </table>

    </div>
  );
}

export default FacultyPage;
