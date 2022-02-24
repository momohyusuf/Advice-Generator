import React from "react";



export default function RandomQuote () {

    const [quotes, setQuotes] = React.useState([])
    const [id, setId] = React.useState([])
    
     const [trigger, setTrigger] = React.useState(0)
    function toggle() {
       setTrigger(prevTrigger => prevTrigger + 1)
    }

  //code for fetching data from The API
  
    React.useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => setQuotes(data.slip.advice))

    }, [trigger])

    React.useEffect(() => {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => setId(data.slip.id))

    }, [trigger])

       console.log(quotes)
       console.log(id)

      return (
          <div className="content-box">
              <p className="id-number"> Advice #{id}</p>
              <h4 className="quotes-text">{quotes}</h4>
              <svg className="divider2" width="295" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z"/><g transform="translate(138)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg>
              <svg className="divider" width="444" height="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" fillRule="evenodd"><path fill="#4F5D74" d="M0 8h196v1H0zM248 8h196v1H248z"/><g transform="translate(212)" fill="#CEE3E9"><rect width="6" height="16" rx="3"/><rect x="14" width="6" height="16" rx="3"/></g></g></svg> <br/>
              <div className="toggler-box">
              <svg onClick={toggle} className="toggler" width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" fill="#202733"/></svg>
            </div>
          </div>
      )
}
