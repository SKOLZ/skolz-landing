import profileImagePng from 'assets/profile_image.png';

type profileImageProps = {
  className: string;
}

export default function profileImage ({ className }: profileImageProps) {
  return (
    <svg className={className} width="500" height="500" viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <mask id="Mask">
          <rect className="mask-square" x="84.4794" y="253.438" width="162.082" height="162.082" fill="black"/>
          <rect className="mask-square" x="84.4794" y="84.4794" width="162.082" height="162.082" />
          <rect className="mask-square" x="253.438" y="168.959" width="162.082" height="162.082" />
          <rect className="mask-square" x="253.438" y="337.917" width="162.082" height="162.082" />
          <rect className="mask-square" x="42.2397" y="337.917" width="35.3634" height="35.3635" />
          <rect className="mask-square" x="422.397" y="423.094" width="35.3634" height="35.3635" />
          <rect className="mask-square" x="253.438" y="42.2397" width="35.3634" height="35.3635" />
          <rect className="mask-square" x="6.10352e-05" y="253.438" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="253.438" y="84.4794" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="84.4794" y="422.397" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="422" y="169" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="168.959" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="168.959" y="422.397" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="337.917" y="84.4794" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="6.10352e-05" y="380.157" width="77.6031" height="77.6031" />
          <rect className="mask-square" x="422.397" y="337.917" width="77.6031" height="77.6031" />
        </mask>
      </defs>
      <image width="500" height="500" mask="url(#Mask)" href={profileImagePng} />
    </svg>
  );
}
