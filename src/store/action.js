import axios from "axios"

export const createAccount = (crds, navigate) => async(dispatch) =>{
  try{
    let {data} = await axios.post("https://mock-server-sx60.onrender.com/users", crds);
      navigate("/");
    dispatch({type: "SIGNUP" , payload: data});
  }catch(err){
    console.log(err);
  }
}
export const createTask = (task) => async(dispatch) =>{
  try{
    let {data} = await axios.post("https://mock-server-sx60.onrender.com/tasks", task);
    dispatch({type: "CREATE_TASK" , payload: data});
  }catch(err){
    console.log(err);
  }
}

export const loginAccount = (user_name, password, navigate) => async(dispatch) =>{
  console.log(user_name, password);
  try{
    let {data} = await axios.get("https://mock-server-sx60.onrender.com/users");
    let flag = false;
    let user = null;
    data.map((d) => {
      if(d.user_name===user_name && d.password===password){
        flag=true;
        user = d;
      }
    })

    if(flag){
      alert("Login Successfully");
      navigate("/tasks");
      dispatch({type: "LOGIN", payload: user})
    }else{
      alert("Incorrect Crdetional");
    }

  }catch(err){
    console.log(err);
  }
}