import s from '../components/Profile/MyPosts/MyPosts.module.css'

export const Element = Element => ({ input, meta, ...props }) => {
 const hasError = meta.touched && meta.error;
 return (
  <div className={s.formControl + " " + (hasError ? s.error : "")}>
   <Element {...input} {...props} />
   {hasError && <span> {meta.error} </span>}
  </div>
 );
};

