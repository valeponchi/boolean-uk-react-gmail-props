import SingleEmail from "./singleEmail"

function Main(props) {
  return (
    <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
           <SingleEmail 
              key={index}
              email={email}
              toggleRead={props.toggleRead}
              toggleStar={props.toggleStar}
           />
          ))}
        </ul>
      </main>
  )
}



export default Main 