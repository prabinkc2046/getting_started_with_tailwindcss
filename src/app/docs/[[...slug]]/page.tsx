import React from 'react'


type Empty = null
type catchAllProps = {
    params: {
        slug: string[]
    }
}

enum Feature {
    feature1 = 'feature1',
    feature2 = 'feature2',
    feature3 = 'feature3',
    feature4 = 'feature4',
}

enum Concept  {
    concept1 = "concept1",
    concept2 = "concept2",
    concept3 = "concept3",
    concept4 = "concept4",
    concept5 = "concept5",
}

enum Example {
    example1 = "example1",
    example2 = "example2",
    example3 = "example3",
    example4 = "example4"
}


const CatchAll = ({params}: catchAllProps) => {
    let search: string = ''
    let firstString: string = ''
    let secondString: string = ''
    let thirdString: string = ''
    
    const {slug} = params;
    if(!slug){
        return (<div>Home page</div>)
    }

    if(slug.length === 2){
        firstString = params.slug[0]
        secondString = params.slug[1]
        search = `${firstString}${secondString}`
    }

    if (slug.length === 3){
        firstString = params.slug[0]
        secondString = params.slug[1]
        thirdString = params.slug[2]
        search = `${firstString}${secondString}${thirdString}`
    }

    switch(search){

        case `${Feature.feature1}${Concept.concept1}`:
            return(<div>${Feature.feature1}${Concept.concept1}</div>)

        
        case `${Feature.feature2}${Concept.concept2}`:
            return(<div>${Feature.feature2}${Concept.concept2}</div>)
        
        case `${Feature.feature4}${Concept.concept1}${Example.example4}`:
            return(<div>This is feature 4 concept 1 example 4</div>)

        default:
            return (<div>Home page</div>)
    }
}

export default CatchAll
