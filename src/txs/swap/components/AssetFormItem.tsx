import { FC, ForwardedRef, InputHTMLAttributes, ReactNode } from "react"
import { forwardRef } from "react"
import { Grid } from "components/layout"
import styles from "./AssetFormItem.module.scss"

interface Props {
  label: string
  extra?: ReactNode
  error?: string
}

const AssetFormItem: FC<Props> = ({ label, extra, error, children }) => {
  return (
    <Grid gap={3}>
      <Grid gap={5} className={styles.border}>
        <header className={styles.header}>
          <label className={styles.label}>{label}</label>
          {extra && <aside className={styles.extra}>{extra}</aside>}
        </header>

        {children}
      </Grid>
      <p className={styles.error}>{error}</p>
    </Grid>
  )
}

export default AssetFormItem

/* input */
export const AssetInput = forwardRef(
  (
    attrs: InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <input {...attrs} className={styles.input} autoComplete="off" ref={ref} />
    )
  }
)

/* read only */
export const AssetReadOnly: FC = ({ children }) => {
  return <span className={styles.input}>{children}</span>
}
