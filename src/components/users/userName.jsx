import { Link } from "react-router-dom";

function UserName({ user }) {
  return (
    <li>
      <Link to={`users/${user.id}`} key={user.id}>
        {user.name}
      </Link>
    </li>
  );
}

export default UserName;

// {
//     "id": "cbd13388-bd0e-4e12-b30e-45f2c218db39",
//     "name": "Kelly Baumbach",
//     "tel": "569-736-3323",
//     "img": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/89.jpg",
//     "email": "Kelly_Baumbach85@gmail.com"
//   },
