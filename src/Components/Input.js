const Input = () => {
    return (
        <form className='inputForm centerDiv'>
          <h1 className='formTitle'>Wellcome to Waste Sheet generator!</h1>
          <input type='text' className="wasteInput" placeholder='Please, insert your waste...' />
          <button type='submit' className='submitButton'>Send</button>
        </form>
    )
}

export default Input