import { headers } from 'next/headers';
import { ImageResponse } from 'next/og';
import { NextResponse } from 'next/server';

import { metadata as meta } from '@/app/config';

import DarkSvg from './patterns/dark-svg';
import LightSvg from './patterns/light-svg';

export const runtime = 'edge';

export async function GET(): Promise<Response | ImageResponse> {
  try {
    const headersList = await headers();
    const isLight = headersList.get('Sec-CH-Prefers-Color-Scheme') === 'light';

    const bricolage = await fetch(
      new URL(
        '../../../public/fonts/BricolageGrotesque_SemiCondensed-ExtraBold.ttf',
        import.meta.url
      )
    ).then((res) => res.arrayBuffer());

    const { title, description } = {
      title: meta.site.title,
      description: meta.site.description,
    };

    return new ImageResponse(
      (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {isLight ? <LightSvg /> : <DarkSvg />}
          <div
            style={{
              position: 'absolute',
              fontFamily: 'Bricolage',
              fontSize: '120px',
              fontWeight: '600',
              letterSpacing: '-0.04em',
              color: isLight ? 'black' : 'white',
              top: '30%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'pre-wrap',
              maxWidth: '750px',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {title}
          </div>
          <div
            style={{
              position: 'absolute',
              fontFamily: 'Bricolage',
              fontSize: '60px',
              fontWeight: '600',
              letterSpacing: '-0.04em',
              color: isLight ? 'black' : 'white',
              top: '85%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              whiteSpace: 'pre-wrap',
              maxWidth: '750px',
              textAlign: 'center',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {description}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: 'Bricolage',
            data: bricolage,
            style: 'normal',
            weight: 400,
          },
        ],
      }
    );
  } catch (error) {
    if (!(error instanceof Error)) throw error;

    return NextResponse.json(
      {
        error: 'Failed to generate image',
      },
      {
        status: 500,
      }
    );
  }
}
