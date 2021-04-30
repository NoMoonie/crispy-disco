import { AnimatePresence, motion } from "framer-motion";

import { FC } from "react";
import { Box2inner } from "styled/homepageStyle";

interface aboutmeinterface {
    open: boolean;
}

const AboutMe: FC<aboutmeinterface> = ({ open }) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: -50,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                        removed: {
                            opacity: 0,
                            x: 50,
                        },
                    }}
                    initial="hidden"
                    animate="visible"
                    exit="removed"
                >
                    <Box2inner>
                        <h1>About me!</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto illo ad quos animi eos,
                            quaerat odit illum. Quidem incidunt, reiciendis delectus nisi corrupti molestias. Nobis,
                            quaerat ut asperiores perferendis veniam officiis ea ducimus quasi dolorem tenetur eaque
                            eligendi exercitationem quas porro. Consequatur odit tempora quod, corrupti nihil eligendi
                            distinctio quia nesciunt architecto, dolor ipsum magnam ratione. Beatae quaerat recusandae
                            hic ut possimus rem assumenda nostrum officia eligendi voluptas, porro blanditiis doloremque
                            quos tenetur illum voluptatem fugit reprehenderit voluptatum similique velit. Inventore,
                            similique beatae quibusdam quos error suscipit facere provident natus quasi consequatur
                            neque eum itaque dolor! Atque numquam eligendi harum nostrum blanditiis, error voluptas
                            perspiciatis. Praesentium amet impedit vel? Sequi, fugiat ducimus optio labore
                            necessitatibus consequuntur voluptatibus eius iure deleniti quidem commodi quae mollitia.
                            Earum error porro voluptas doloremque iste exercitationem, nisi facere illo facilis
                            recusandae placeat ducimus consequuntur ea voluptate delectus, quo sunt libero esse in iusto
                            saepe tempora?
                        </p>
                    </Box2inner>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default AboutMe;
