import React from 'react';

const CampImage = ({className = "h-[158px]"}) => {
    return (
        <div className={className}>
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJhdmFsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
          className="object-cover w-full h-full rounded-2xl"
        />
      </div>
    );
};

export default CampImage;