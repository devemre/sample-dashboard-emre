import React from "react";
import SectionHeadingComponent from "../shared-components/SectionHeading.component";
import useUserStore from "../store/hooks/use-user-store.hook";

const ProfilePage = () => {
  const { user } = useUserStore();
  return (
    <div aria-roledescription="products" className="h-full">
      <SectionHeadingComponent
        title="Products"
        subtitle="View and edit products"
      />
    </div>
  );
};

export default React.memo(ProfilePage);
