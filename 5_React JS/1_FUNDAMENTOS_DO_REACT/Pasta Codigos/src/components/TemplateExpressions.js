const TemplateExpressions = () => {
    const name = "Jéferson";
    const data = {
        age: 24,
        job: "programmer"
    }

    return(
        <div>
            <h3>Olá, {name} tudo bem? você é {data.job}</h3>
        </div>
    );
};

export default TemplateExpressions;