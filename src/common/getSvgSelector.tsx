interface props {
  id: string;
  fillColor?: string
  strokeColor?: string
}

export default function GetSvgSelector({ id , fillColor , strokeColor }: props) {
  switch (id) {
    case "emoji":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="currentColor"
          className="bi bi-emoji-neutral-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
        </svg>
      );
    case "favorite":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill={fillColor || 'currentColor'}
          className="bi bi-heart-fill"
          viewBox="0 0 16 16"
          stroke={strokeColor || ""}
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
}
