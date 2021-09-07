interface Props {
  className?: string;
}

const BarbellIconSolid = ({ className }: Props) => {
  return (
    <svg
      className={className}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M31 15H30V11C29.9994 10.4698 29.7885 9.9614 29.4135 9.58646C29.0386 9.21151 28.5302 9.00061 28 9H26V8C25.9994 7.46975 25.7885 6.9614 25.4135 6.58646C25.0386 6.21151 24.5302 6.00061 24 6H21C20.4698 6.00061 19.9614 6.21151 19.5865 6.58646C19.2115 6.9614 19.0006 7.46975 19 8V15H13V8C12.9994 7.46975 12.7885 6.9614 12.4135 6.58646C12.0386 6.21151 11.5302 6.00061 11 6H8C7.46975 6.00061 6.9614 6.21151 6.58646 6.58646C6.21151 6.9614 6.00061 7.46975 6 8V9H4C3.46975 9.00061 2.9614 9.21151 2.58646 9.58646C2.21151 9.9614 2.00061 10.4698 2 11V15H1C0.734784 15 0.48043 15.1054 0.292893 15.2929C0.105357 15.4804 0 15.7348 0 16C0 16.2652 0.105357 16.5196 0.292893 16.7071C0.48043 16.8946 0.734784 17 1 17H2V21C2.00061 21.5302 2.21151 22.0386 2.58646 22.4135C2.9614 22.7885 3.46975 22.9994 4 23H6V24C6.00061 24.5302 6.21151 25.0386 6.58646 25.4135C6.9614 25.7885 7.46975 25.9994 8 26H11C11.5302 25.9994 12.0386 25.7885 12.4135 25.4135C12.7885 25.0386 12.9994 24.5302 13 24V17H19V24C19.0006 24.5302 19.2115 25.0386 19.5865 25.4135C19.9614 25.7885 20.4698 25.9994 21 26H24C24.5302 25.9994 25.0386 25.7885 25.4135 25.4135C25.7885 25.0386 25.9994 24.5302 26 24V23H28C28.5302 22.9994 29.0386 22.7885 29.4135 22.4135C29.7885 22.0386 29.9994 21.5302 30 21V17H31C31.2652 17 31.5196 16.8946 31.7071 16.7071C31.8946 16.5196 32 16.2652 32 16C32 15.7348 31.8946 15.4804 31.7071 15.2929C31.5196 15.1054 31.2652 15 31 15Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default BarbellIconSolid;
