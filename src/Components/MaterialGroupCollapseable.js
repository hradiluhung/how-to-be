import React, { useEffect, useState } from "react";
import SubMaterialCollapseable from "./SubMaterialCollapseable";
import { FiArrowDown, FiArrowUp } from "react-icons/fi";
import { getSubMaterialByMaterialId } from "../Utils/data";

const MaterialGroupCollapseable = ({ id, name, desc, isFollowed }) => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [subMaterials, setSubMaterials] = useState([]);

  useEffect(() => {
    const subMaterials = getSubMaterialByMaterialId(id);
    setSubMaterials(subMaterials);
  }, [id]);

  const onToggleCollapse = () => {
    setIsCollapse(!isCollapse);
  };

  return (
    <div className="material-group">
      <div className="material-group__header" onClick={onToggleCollapse}>
        <div className="material-group__text">
          <h1 className="material-group__name">{name}</h1>
          <p className="material-group__description">{desc}</p>
        </div>
        <div className="material-group__icon">
          {!isCollapse ? <FiArrowUp size={25} /> : <FiArrowDown size={25} />}
        </div>
      </div>
      {!isCollapse && (
        <div className="material-group__list">
          {subMaterials.map((subMaterial) => (
            <SubMaterialCollapseable
              key={subMaterial.id}
              name={subMaterial.name}
              desc={subMaterial.desc}
              link={subMaterial.link}
              isFollowed={isFollowed}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MaterialGroupCollapseable;
