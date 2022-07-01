
import s from './FormsControls.module.css';

export const Element = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error

  return (
    <div className={s.formControl + " " + (hasError ? s.error : '')}>
      <div>
        <props.elementType {...input} {...props} />
      </div>
      {hasError && <span>{meta.error}</span>}
    </div>
  )
}


// export const Textarea = ({input, meta, ...props}) => {
//  return (
//   <div>
//    <textarea {...input} {...props} />
//   </div>
//  )
// }
