import { useForm } from "react-hook-form"

const ReactHookForms = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)
    console.log(watch("name"))

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            Name  : <input type="text" name="name" {...register("name", { required: true })} />
            {errors.name && <span style={{ color: "red" }}>Name is required</span>}<br />

            email : <input type="text" name="email" {...register("email", {
                required: "Email is required!",
                pattern: { value: /\S+@\S+\.\S+/, message: "Email is invalid!" }
            })} />
            {errors.email && <span style={{ color: "red" }}>{errors.email.message}</span>}<br />

            phone : <input type="text" name="phone" {...register("phone", {
                required: "Phone No. is Required",
                pattern: { value: /[0-9]{10}/, message: "Phone No. is invalid!" }
            })} />
            {errors.phone && <span style={{ color: "red" }}>{errors.phone.message}</span>}<br />

            <input type="submit" />
        </form>
    )
}
export default ReactHookForms
