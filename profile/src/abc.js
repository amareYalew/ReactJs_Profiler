const SalaryComponent = ({ onSalaryChange, salary }) => {

    function changeSalary(e) {
  
        onSalaryChange(e);
  
    }
  
    return (
        <div>
            <input type="text" name="Salary" value={salary}

onChange={changeSalary}></input> 
        </div>
    )
}
  