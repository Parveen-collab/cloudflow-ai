"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Database,
    HardDrive,
    Sparkles,
} from "lucide-react";

import Heading from "@/src/app/components/ui/Heading";
import Stat from "@/src/app/components/ui/Stat";
import AnimatedCounter from "@/src/app/components/ui/AnimatedCounter";

import styles from "./Infrastructure.module.css";
import MetricsPanel from "@/src/app/components/feature/Infrastructure/MetricsPanel";
import ConnectionLine from "@/src/app/components/feature/Infrastructure/ConnectionLine";

const metrics = [
    {
        title: "CPU",
        value: 72,
        progress: 72,
        icon: <Cpu size={18} />,
    },
    {
        title: "GPU",
        value: 41,
        progress: 41,
        icon: <Database size={18} />,
    },
    {
        title: "RAM",
        value: 68,
        progress: 68,
        icon: <HardDrive size={18} />,
    },
];

export default function Infrastructure() {
    return (
        <section className={styles.section}>
            <Heading
                eyebrow="Infrastructure Analysis"
                title="AI analyzes every connected workload"
                subtitle="Connections are mapped in real time before generating optimization recommendations."
                align="center"
            />

            <div className={styles.visualization}>
                {/* LEFT */}
                <motion.div
                    className={styles.providers}
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <div>AWS</div>
                    <div>Azure</div>
                    <div>Google</div>
                    <div>On-Prem</div>
                </motion.div>

                {/* CENTER */}
                <motion.div
                    className={styles.engine}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.6,
                    }}
                >
                    <Sparkles size={42} />

                    <span>AI Engine</span>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    className={styles.metrics}
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <MetricsPanel />
                </motion.div>

                {/* SVG Lines */}
                <ConnectionLine />
            </div>
        </section>
    );
}