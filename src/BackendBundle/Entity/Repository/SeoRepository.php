<?php

namespace BackendBundle\Entity\Repository;

use Doctrine\ORM\EntityRepository;

class SeoRepository extends EntityRepository
{
    public function getSeoByPage($page)
    {
        $q = $this->createQueryBuilder('a')
            ->where('a.slug =:page')
            ->setParameter('page', $page)
            ->getQuery()->getResult();
//            ->getArrayResult();

        return $q;
    }
}