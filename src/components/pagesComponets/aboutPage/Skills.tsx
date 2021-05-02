import SkillItem from "components/pagesComponets/aboutPage/SkillItem";

const Skills = () => {
    return (
        <section>
            <h1>Skills</h1>
            <SkillItem procent="80%" name="Javascript" />
            <SkillItem procent="70%" name="React" />
            <SkillItem procent="70%" name="Html" />
            <SkillItem procent="60%" name="Git/Github" />
            <SkillItem procent="60%" name="Css" />
            <h1>Languages</h1>
            <SkillItem procent="100%" name="Swedish" />
            <SkillItem procent="90%" name="English" />
        </section>
    );
};

export default Skills;
