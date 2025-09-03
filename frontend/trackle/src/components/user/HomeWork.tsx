import { forwardRef } from 'react'

type HomeWorkProps = {
  todayHW?: string;
}

const HomeWork = forwardRef<HTMLDivElement, HomeWorkProps>(
  ({ todayHW }, ref) => {
    return (
      <div
        className='flex flex-col items-center mx-auto text-[var(--color-text)]'
        ref={ref}
      >
        <h1
          style={{ fontSize: "var(--font-size-base)" }}
          className='bg-[var(--color-accent)] font-bold text-nowrap p-2 w-full text-center whitespace-nowrap rounded-lg'
        >
          Today's Home Work
        </h1>
        <p
          className='mt-4 border-2 p-2 rounded-lg'
          style={{ fontSize: "var(--font-size-base)" }}
        >
          {todayHW ? todayHW : "No homework assigned for today"}
        </p>
      </div>
    )
  }
)

export default HomeWork
