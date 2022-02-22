try:
  import unzip_requirements
except ImportError:
  pass

import numpy as np
from konlpy.tag import Komoran

def main(event, context):
    a = np.arange(15).reshape(3, 5)
    
    print("Your numpy array")
    print(a)

    print("----Komoran Test----")
    komoran = Komoran()
    print(komoran.pos("저를 제자로 받아주세요."))

    if __name__ == "__main__":
        main('', '')


