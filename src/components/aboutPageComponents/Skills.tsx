import SkillItem from "components/aboutPageComponents/SkillItem";

const Skills = () => {
    return (
        <section>
            <h1>skills</h1>
            <SkillItem procent="97%" name="React" />
            <SkillItem procent="97%" name="Javascript" />
            <SkillItem procent="94%" name="Git/Github" />
            <SkillItem procent="90%" name="Html" />
            <SkillItem procent="80%" name="Css" />
            <SkillItem procent="40%" name="Wordpress" />
            <SkillItem procent="30%" name="php" />
        </section>
    );
};

export default Skills;
