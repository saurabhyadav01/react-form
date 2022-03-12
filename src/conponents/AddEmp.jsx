export const Empolyee= ()=>{


    return(
        <div>
           <form>
           <h2>Register Empolyee</h2>
            <input type="text" name="name" placeholder="Emp Name"/>
            <br />
            
           <input type="number" name="age" placeholder="Enter Age"/>
            <br />
            <input type="text" name="address" placeholder="Address"/>
            <br />
           <select name="department" id="">
               <option value="">Department</option>
               <option value="">Maneger</option>
           </select>
            <br />
            <input type="text" name="salary" placeholder="Salary"/>
            <br />
            <select name="material" id="">
               <option value="">Material Status</option>
               <option value="">Passed</option>
           </select>
           <input type="submit" />
           </form>
        </div>
    )
}