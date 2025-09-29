import { FileText, Download } from "lucide-react";
import { motion, useSpring } from "framer-motion"

const Card = ({ data }) => {
    return (
        <motion.div
            drag="x"
            dragDirectionLock
            onDirectionLock={axis => console.log(`Locked to ${axis} axis`)}
            className="flex flex-col h-60 w-60 bg-zinc-900 text-white rounded-2xl p-4 justify-around shadow-lg">
            {/* Top section */}
            <div>
                <FileText size={20} className="text-white mb-2" />
                <p className="text-sm">{data.description}</p>
            </div>

            {/* Middle section */}
            <div className="flex items-center justify-between">
                <span className="text-sm">{data.size}</span>
                <button className="bg-zinc-700 p-2 rounded-full hover:bg-zinc-600">
                    <Download size={16} />
                </button>
            </div>

            {/* Bottom button */}

            <button className="bg-green-600 hover:bg-green-700 text-white py-1 rounded-xl font-medium">
                {data.title}
            </button>
            <motion.button animate={{ opacity: 1 }} />
        </motion.div>
    );
};

export default Card;
