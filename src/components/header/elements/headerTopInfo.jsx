import Link from "next/link";
import { FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const HeaderTopInfo = function () {
  return (
    <>
      <div className="ltn__top-bar-menu">
        <ul>
          <li>
            <Link href="mailto:info@rajlaxmihousing.com">
              <FaEnvelope />
              <i></i> info@rajlaxmihousing.com
            </Link>
          </li>
          <li>
            <Link href="/locations">
              <FaMapMarkerAlt />
              Beside Ankur School and College, Rajbari Sadar Rajbari
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderTopInfo;
