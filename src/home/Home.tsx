import { SubmitHandler, useForm } from "react-hook-form";
import styles from "./Home.module.css";

const isSuccess = false;

interface IFormState {
  name: string;
  email: string;
}
export default function Home() {
  const { register, handleSubmit } = useForm<IFormState>();

  const onSubmit: SubmitHandler<IFormState> = (data) => {
    console.log(data);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {isSuccess ? (
          <div className={styles.success}>Форма отправлена!!</div>
        ) : (
          <>
            <h1>GTA 6 - ОСТАВИТЬ ЗАЯВКУ</h1>
            <input
              type="name"
              placeholder="введите email"
              {...register("name")}
            />
            <input
              type="email"
              placeholder="введите имя"
              {...register("email")}
            />
            <button>хочу GTA</button>
          </>
        )}
      </form>
    </div>
  );
}
