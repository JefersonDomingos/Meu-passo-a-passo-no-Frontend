const TemplateExpressions = () => {
    const name = "Jéferson";
    const data = {
        age: 25,
        job: "Progamador"
    }
    return(
        <div>
            <p>
                Olá {name} em {2022 + 1} você será {data.job}.
            </p>
        </div>
    )
}

export default TemplateExpressions;