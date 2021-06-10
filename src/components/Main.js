import SingleEmail from "./singleEmail"

function Main(props) {
  return (
    <main className="emails">
        <ul>
          {props.filteredEmails.map((email, index) => (
           <SingleEmail 
              email={email}
              index={index}
              toggleRead={props.toggleRead}
              toggleStar={props.toggleStar}
           />
          ))}
        </ul>
      </main>
  )
}



export default Main 