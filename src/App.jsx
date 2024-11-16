import { useForm } from 'react-hook-form';
const App = () => {
  const {register,handleSubmit}=useForm();
  
  return (
    <div>
      <form action="" onSubmit={handleSubmit((data)=>console.log(data))}>
        <input {...register("name")} type="text" placeholder='name'/>
        <input {...register("email")} type="email" placeholder='email' />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default App