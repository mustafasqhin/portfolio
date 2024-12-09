import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 " id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        Projelerim
      </h1>
      <div className="h-full w-full grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-1 px-1 sm:px-1">
        <ProjectCard
          src="/lavarun.png"
          title="Lava Run"
          description="olabildiğince en yüksek skora varmaya çalışan robotumuz bi takım engelleri aşmaya çalışıyor."
          url="https://lavarungame.web.app"
        />
        <ProjectCard
          src="/themirror.png"
          title="The Mirror"
          description="VR destekli gerilim oyunu.Vefat eden eşinin anılarına bakarken olayların arasına karışıyor."
          url="https://themirror.web.app"
        />
          <ProjectCard
          src="/3dpong.png"
          title="3d Pong"
          description="Yapay zekaya karşı bi rekabeti yenilmemek lazım."
          url="https://pong3d.web.app"
        />
          <ProjectCard
          src="/dontdrive.webp"
          title="Uykulu araç kullanmayın"
          description="Biz insanız, yoruluruz, uykumuz gelir. Bölünmemiş dikkatimizi gerektiren en önemli zamanlardan biri, araba kullandığımız zamandır. Bu uygulama uykulu olup olmadığınızı tespit edecek ve sizi basit ve etkili bir şekilde uyandırmak için bir alarm sesi çalacaktır."
          url="https://dont-drive-drowsy.web.app/"
        />
      </div>
    </div>
  );
};

export default Projects;
