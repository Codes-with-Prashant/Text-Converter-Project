import React  from 'react'

export default function About(props) {

let mystyle={
  color:props.mode==="dark"?"white":"black",
  backgroundColor:props.mode==="dark"?"#5C527F":"white",
  border:"1px solid",
  borderColor:props.mode==="dark"?"white":"black"
}

    return (
        <div className="container" style={{color:props.mode==="dark"?"white":"black"}}>
          <h1 className="my-3">About Us</h1>
            <div class="accordion" id="accordionExample">
  <div class="accordion-item" style={mystyle}>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <strong>Analyze Your text </strong>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or Converting your Text.

      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <strong>Free to use </strong>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      TextUtils is a free character counter tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      <strong>Browser Compatible </strong>
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body" style={mystyle}>
      This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf document, essays, etc.

      </div>
    </div>
  </div>
</div>
        </div>
    )
}
